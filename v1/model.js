var { Properties } = require('./internal_dependencies/properties')
var { behavioural_tensor } = require('./tensor_repository/tensors')

class Person {

  constructor(character_properties) {
    this.props = new Properties();
    this.character = character_properties;
  }

  emotionExpressedWPTStimuli( stimuli ) {
    var results = [];
    for(var i = 0 ; i < this.character.external_emotional_matrix.length; i += 1) {
      if(this.character.external_emotional_matrix[i][0] == stimuli) {
        results.push(this.character.external_emotional_matrix[i][1]);
      }
    }
    return results.length > 1 ? results : results[0];
  }

  emotionFeltWPTStimuli( stimuli ) {
    var results = [];
    for(var i = 0 ; i < this.character.internal_emotional_matrix.length; i += 1) {
      if(this.character.internal_emotional_matrix[i][0] == stimuli) {
        results.push(this.character.internal_emotional_matrix[i][1]);
      }
    }
    return results.length > 1 ? results : results[0];
  }

  behaviourGivenEmotion( emotion ) {
    var results = [];
    for(var i = 0 ; i < this.character.emotional_manifestations_matrix.length; i += 1) {
      if(this.character.emotional_manifestations_matrix[i][0] == emotion) {
        results.push(this.character.emotional_manifestations_matrix[i][1]);
      }
    }
    return results.length > 1 ? results : results[0];
  }

  simulateFullResponseToStimuli( stimuli ) {
    let emotional_response = this.emotionExpressedWPTStimuli(stimuli);
    let emotions_felt = this.emotionFeltWPTStimuli(stimuli);
    let action;
    if(emotions_felt.length > 1) {
      action = [];
      for(var i = 0 ; i < emotions_felt.length ; i+=1) {
        let action_r = this.behaviourGivenEmotion(emotions_felt[i])
        if(action.includes(action_r)) {}
        else {action.push(action_r)}
      }
    }
    else {
      action = this.behaviourGivenEmotion(emotions_felt);
    }
    let resultVector = [stimuli, emotions_felt, emotional_response, action];
    return resultVector;
  }

  makeVerboseEasy(vector) {

    let partA = `If a subject is exposed to a situation that is ${vector[0].toLowerCase()} then`;
    let partB = vector[1] != undefined ? ` they will internal experience ${vector[1].join(" and ")}` : "";
    let partC = vector[2] != undefined ? `they will only display ${vector[2].join(" and ")}` : "" ;
    let partD = vector[3] != undefined ? `. Their behaviour/symotoms will be the following \b${vector[3].join(", ")}.` : "."
    return partA + partB + partC + partD
  }

  makeVerbose( vector ) {
    let out = ""
    for(var i = 0 ; i < vector.length - 1 ; i += 1) {
      out+=vector[i] + "\t >> \t"
    }
    out+=vector[vector.length-1];
    return out;
  }

}

var props = new Properties();
var subjectA = new Person(behavioural_tensor); // create a person object and load it with a behavioural tensor
var test_stimuli = props.stimuli.Negative_For_The_Future; // a sample stimuli to which the subject is exposed
console.log(subjectA.makeVerboseEasy(subjectA.simulateFullResponseToStimuli(test_stimuli)));
