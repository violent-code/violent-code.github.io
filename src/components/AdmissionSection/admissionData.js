export const admissionData = {
  developers: {
    id: 'developers',
    introductionTitle: 'Introduction',
    introduction:
      'During your first lecture we will introduce the Sourcery academy, tell you more about what we do as developers, get to know your fellow team members, lecturers and mentors.',

    learnTitle: 'You will learn:',
    learn: ['React', 'JPA', 'Spring Boot'],

    interviewTitle: 'An interview',
    interview:
      'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',

    dates: [
      {
        id: 'developers-entrance-exam',
        startDate: new Date(2022, 9, 2),
        text: 'Entrance exam',
      },
      {
        id: 'developers-academy-duration',
        startDate: new Date(2022, 9, 9),
        endDate: new Date(2022, 11, 12),
        text: 'Academy duration',
      },
      {
        id: 'developers-final-exam',
        startDate: new Date(2022, 11, 16),
        text: 'Final exam',
      },
    ],
  },

  testers: {
    id: 'testers',
    introductionTitle: 'Introduction and workshop',
    introduction:
      '4 to 5 hours of activities. We will introduce the Sourcery academy, tell you more about what we do as testers, get to know each other and have a fun workshop challenging your critical thinking, problem solving, communication and team working skills.',

    learnTitle: 'You will learn:',
    learn: [
      'The foundations of testing',
      'Functional testing for web applications and API',
      'Foundations of non-functional testing',
      'Foundations for test automation',
    ],

    interviewTitle: 'An interview',
    interview:
      'Only top candidates from day one are invited to the interview which will challenge your technical skills and English knowledge.',

    dates: [
      {
        id: 'testers-application-deadline',
        startDate: new Date(2022, 4, 17),
        text: 'Application deadline',
      },
      {
        id: 'testers-admission',
        startDate: new Date(2022, 4, 28),
        endDate: new Date(2022, 4, 29),
        text: 'Admission',
      },
      {
        id: 'testers-academy-duration',
        startDate: new Date(2022, 5, 26),
        endDate: new Date(2022, 7, 30),
        text: 'Academy duration',
      },
    ],
  },

  frontend: {
    id: 'frontend',
    introductionTitle: 'Introduction and workshop',
    introduction:
      '4 to 5 hours of activities. We will introduce the Sourcery academy, tell you more about what we do as front-end developers, get to know each other and have a fun workshop challenging your critical thinking, problem solving, communication and team working skills.',

    learnTitle: 'You will learn:',
    learn: [
      'Semantic HTML code',
      'Advanced CSS (Scss)',
      'BEM methodology',
      'Accessibility standards',
      'Agile methodology, build tools and task runners',
    ],

    interviewTitle: 'An interview',
    interview:
      'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',

    dates: [
      {
        id: 'frontend-entrance-exam',
        startDate: new Date(2022, 8, 26),
        endDate: new Date(2022, 8, 28),
        text: 'Entrance exam',
      },
      {
        id: 'frontend-academy-duration',
        startDate: new Date(2022, 9, 30),
        endDate: new Date(2022, 11, 18),
        text: 'Academy duration',
      },
      {
        id: 'frontend-final-exam',
        startDate: new Date(2023, 0, 8),
        text: 'Final exam',
      },
    ],
  },
};
