import type DocumentCircle from './DocumentCircle'
import type Document from './Document'

/**
 * Contains information about Document Group class.
 */
export default class DocumentGroup {
  /**
   * Group id.
   */
  public id: number

  /**
   * Group name.
   */
  public name: string

  /**
   * Group info.
   */
  public info: string

  /**
   * Group circles.
   */
  public circles: DocumentCircle[]

  /**
   * Is expanded.
   */
  public isExpanded: boolean

  /**
   * Nested documents.
   */
  public documents: Document[]

  /**
   * The constructor.
   */
  public constructor(data: {
    id: number
    name: string
    info?: string
    isExpanded?: boolean
    circles?: DocumentCircle[]
    documents?: Document[]
  }) {
    this.id = data.id
    this.name = data.name
    this.info = data.info ?? ''
    this.isExpanded = data.isExpanded ?? false
    this.circles = data.circles ?? []
    this.documents = data.documents ?? []
  }
}
