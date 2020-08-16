// Cookies
import Cookies from 'universal-cookie';

// mathjs
// import { create, all } from 'mathjs';
// const math = create(all);

const cookies = new Cookies();

const stepsConst = {
  GREET_BACK_1: {
    type: 'BOT',
    action: 'GREET_BACK_1',
    text: () =>
      `Welcome back ${cookies.get(
        'user'
      )}. Let's giddy up from where we left off`,
    responseType: 'GREET_BACK_2',
    waitForUserInput: false,
  },
  GREET_BACK_2: {
    type: 'BOT',
    action: 'GREET_BACK_2',
    text: () =>
      "Give me any math expression you can think of - I'll crunch it in no time",
    responseType: 'MATH_CALC_1',
    waitForUserInput: true,
  },

  GREETING_1: {
    type: 'BOT',
    action: 'GREETING_1',
    text: () =>
      "Hey, I'm Diego! Today I'm gonna take care of your problems one by one.",
    responseType: 'GREETING_2',
    waitForUserInput: false,
  },
  GREETING_2: {
    type: 'BOT',
    action: 'GREETING_2',
    text: () => "Let's begin by telling me your name",
    responseType: 'NAME_RESPONSE',
    waitForUserInput: true,
  },
  NAME_RESPONSE: {
    type: 'BOT',
    action: 'NAME_RESPONSE',
    text: () => 'Pleased to meet ya USERNAME!',
    responseType: 'GREETING_3',
    waitForUserInput: false,
  },
  GREETING_3: {
    type: 'BOT',
    action: 'GREETING_3',
    text: () =>
      "Alright, this is how it going to work. Give me any math expression you can think of - I'll crunch it in no time",
    responseType: 'MATH_CALC_1',
    waitForUserInput: true,
  },
  MATH_CALC_1: {
    type: 'BOT',
    action: 'MATH_CALC_1',
    text: () => 'SOLVE MATH EXPRESSION',
    responseType: 'MATH_RESPONSE_1',
    waitForUserInput: false,
  },
  MATH_RESPONSE_1: {
    type: 'BOT',
    action: 'MATH_RESPONSE_1',
    text: () => 'This was easy, give me something harder 😃',
    responseType: 'MATH_CALC_2',
    waitForUserInput: true,
  },
  MATH_CALC_2: {
    type: 'BOT',
    action: 'MATH_CALC_2',
    text: () => 'SOLVE MATH EXPRESSION',
    responseType: 'RANDOM_RESPONSE',
    waitForUserInput: false,
  },
  RANDOM_RESPONSE: {
    type: 'BOT',
    action: 'RANDOM_RESPONSE',
    text: () => 'Piece of cake, want to try another one?',
    responseType: 'MATH_CALC_2',
    waitForUserInput: true,
    // 'Got it! Hit me again',
    // 'That one was tough! Got any more?',
    // 'Piece of cake, want to try another one?'
  },
};

export default stepsConst;
