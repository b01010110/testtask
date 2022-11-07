import type DocumentCircle from './DocumentCircle'

/**
 * Contains information about Document class.
 */
export default class Document {
  /**
   * Document id.
   */
  public id: number

  /**
   * Document name.
   */
  public name: string

  /**
   * Document info.
   */
  public info: string

  /**
   * Document circles.
   */
  public circles: DocumentCircle[]

  /**
   * Is required.
   */
  public isRequired: boolean

  /**
   * The constructor.
   */
  public constructor(data: {
    id: number
    name: string
    info?: string
    isRequired?: boolean
    circles?: DocumentCircle[]
  }) {
    this.id = data.id
    this.name = data.name
    this.info = data.info ?? ''
    this.isRequired = data.isRequired ?? false
    this.circles = data.circles ?? []
  }
}
