/**
 * Contains information about Document Circle class.
 */
export default class DocumentCircle {
  /**
   * Circle id.
   */
  public id: number

  /**
   * Circle color.
   */
  public color: string

  /**
   * The constructor.
   */
  public constructor(id: number, color: string) {
    this.id = id
    this.color = color
  }
}
