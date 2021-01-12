import { Item } from "react-native-paper/lib/typescript/components/List/List"

describe('App displays welcome message', () => {
  it('on load', async () => {
    await expect(
      element(by.label('Hello Mobile')).atIndex(1)
      ).toBeNotVisible()
  })
})