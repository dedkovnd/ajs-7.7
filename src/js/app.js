// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
class Character {
  constructor(props) {
    this.name = props.name
    this.attack = props.attack
    this.defence = props.defence
    this.level = 1
    this.health = 100
  }
  levelUp(){
    if (this.health > 0){
      this.level = this.level + 1
      this.attack = this.attack*1.2
      this.defence = this.defence*1.2
      this.health = 100
    } else {
      throw new Error("don't can level up")
    }
  }
}
class Bowman extends Character {
  constructor(){
    super({name:"Bowman", attack: 25, defence: 25})
  }
}
class Swordsman extends Character {
  constructor(){
    super({name:"Swordsman", attack: 40, defence: 10})
  }
}
class Magician extends Character {
  constructor(){
    super({name:"Magician", attack: 10, defence: 40})
  }
}
class Undead extends Character {
  constructor(){
    super({name:"Undead", attack: 10, defence: 40})
  }
}
class Zombie extends Character {
  constructor(){
    super({name:"Zombie", attack: 40, defence: 10})
  }
}
class Daemon extends Character {
  constructor(){
    super({name:"Daemon", attack: 10, defence: 40})
  }
}

export {Character,Bowman};
