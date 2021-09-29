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
    [props.emotions.Anxiety, props.behaviour.Avoidance],
    [props.emotions.Stress, props.behaviour.Decreased_Motivation]
  ],

  internal_emotional_matrix: [
    [props.stimuli.Disagreement, props.emotions.Fear],
    [props.stimuli.Disagreement, props.emotions.Insecurity],
    [props.stimuli.Agreement, props.emotions.Happiness],
    [props.stimuli.Negative_For_The_Future, props.emotions.Fear],
    [props.stimuli.Negative_For_The_Future, props.emotions.Anxiety],
    [props.stimuli.High_Pressure, props.emotions.Stress],
    [props.stimuli.High_Pressure, props.emotions.Fear],
    [props.stimuli.High_Pressure, props.emotions.Anxiety],
    [props.stimuli.Pride, props.emotions.Happiness]

  ]
};

module.exports = { behavioural_tensor  }
