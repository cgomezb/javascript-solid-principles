function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case 'text':
        console.log('Answer: _____________________');
        break;
      case 'range':
        console.log('Minimum: _____________________');
        console.log('Maximum: _____________________');
        break;
    }
    console.log('');
  });
}

const questions = [
  {
    type: 'boolean',
    description: 'This video es useful.'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favourite language?',
    options: ['HTML', 'CSS', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Describe your favourite JS feature.'
  },
  {
    type: 'range',
    description: 'What is the speed limit in your city?'
  }
];

printQuiz(questions);
