import {Character,Bowman} from "../app"

test("attack and defence up when level up",()=>{
  let bowman = new Bowman();
  let bowmanUp = {
    name: 'Bowman',
      attack: 30,
      defence: 30,
      level: 2,
      health: 100
  }
  expect(bowman.levelUp()).toEqual(bowmanUp)
})
