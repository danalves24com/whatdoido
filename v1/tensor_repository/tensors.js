const { Properties } = require("../internal_dependencies/properties");


var props = new Properties();

let behavioural_tensor = {

  external_emotional_matrix: [ // emotion that the subject displays
    [props.stimuli.Disagreement, props.emotions.Anger],
    [props.stimuli.Agreement, props.emotions.Happiness]
  ],

  emotional_manifestations_matrix: [
    [props.emotions.Anger, props.behaviour.Rudenss],
    [props.emotions.Anger, props.behaviour.Verbal_Defense],
    [props.emotions.Anxiety, props.behaviour.Dependency],
    [props.emotions.Anxiety, props.behaviour.Avoidance]
  ],

  internal_emotional_matrix: [
    [props.stimuli.Disagreement, props.emotions.Fear],
    [props.stimuli.Agreement, props.emotions.Happiness],
    [props.stimuli.Negative_For_The_Future, props.emotions.Fear],
    [props.stimuli.Negative_For_The_Future, props.emotions.Anxiety]
  ]

};

module.exports = { behavioural_tensor  }
