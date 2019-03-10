// @flow

export default class Option {
  name: string
  converter: number
  unit: string

  constructor(name: string, converter: number, unit: string) {
    this.name = name
    this.converter = converter
    this.unit = unit
  }
}
