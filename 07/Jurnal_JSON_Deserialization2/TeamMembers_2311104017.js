const fs = require('fs');

class TeamMembers2311104017 {
  static ReadJSON() {
    const jsonData = fs.readFileSync('./jurnal7_2_2311104017.json', 'utf-8');
    const obj = JSON.parse(jsonData);

    console.log("Team member list:");
    obj.members.forEach(member => {
      console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
    });
  }
}

TeamMembers2311104017.ReadJSON();
