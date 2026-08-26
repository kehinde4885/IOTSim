import { entitiesSubTypes, entityConfig } from '../types.ts'
import { MyEmitter } from '../EventBus.ts'

/**
 * abstract classes are meant to serve as a blueprint
 * and are not to be instantiated
 * Abstract methods must be implemented by a class children
 *
 */

export abstract class Entity {
  name: string
  id: string
  subtype: string
  EventBus: MyEmitter
  Relationships: Map<any, any> = new Map()

  constructor(
    { name, id, subtype, relationships }: entityConfig,
    eventBus: MyEmitter,
  ) {
    this.name = name
    this.EventBus = eventBus
    this.id = id
    this.subtype = subtype

    relationships?.forEach((relationship) => {
      const relSet = new Set()

      //returns the value of an object
      Object.values(relationship)[0].forEach((item) => {
        relSet.add(item)
      })

      this.Relationships.set(Object.keys(relationship)[0], relSet)
    })
  }

  getInfo(): {} {
    const objectInfo = {
      id: this.id,
      name: this.name,
      relationships: [] as {}[],
      subtype: this.subtype,
    }

    //loop through relationship map
    for (const [key, value] of this.Relationships) {
      // console.log(key)

      const rel = { [key]: Array.from(value) }

      objectInfo.relationships.push(rel)
    }

    return objectInfo
  }
}

/**
 * A variable type named "Constructor" for a generic class T
 * that is a function that is called with "new" keyword
 * the function accepts an array of any variable type
 * and returns an instance T
 *
 */
export type Constructor<T> = new (...args: any[]) => T

/**
 * The class EntityFactory accepts a parameter
 * of any class(T) that extends the Entity class
 */
export class EntityFactory<T extends Entity> {
  /**
   * registry is a map variable that stores
   * a string as its KEY,
   * a constructor as its VALUE
   */

  private registry = new Map<string, Constructor<T>>()

  //register the entity
  //its key is the string name for the leaf type
  register(key: entitiesSubTypes, ctor: Constructor<T>): void {
    if (this.registry.has(key)) {
      throw new Error(`Duplicate registration for key: "${key}"`)
    }
    this.registry.set(key, ctor)
  }

  //create instance of entity
  //returns a type any(T)
  create(key: string, ...args: any[]): Entity {
    //console.log(args)
    //fetch constructor
    const ctor = this.registry.get(key)

    //if constructor has not been registered
    if (!ctor) {
      throw new Error(
        `Unknown type "${key}". Known types are: ${[...this.registry.keys()].join(',')}`,
      )
    }
    //args Array is spread here
    //before passing as parameter.
    return new ctor(...args)
  }
}
