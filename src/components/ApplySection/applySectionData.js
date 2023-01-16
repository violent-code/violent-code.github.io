import { routes } from '~/routes';

const data = {
  DEVELOPERS: {
    imagePath: '/assets/images/Image_Apply_Academy_Developers.svg',
    paragraphData:
      'Entrance test results define a priority list of candidates for developers. We accept 20 candidates with highest marks into academy.',
    buttonProps: { to: routes.register },
  },
  FRONTEND: {
    imagePath: '/assets/images/Image_Apply_Academy_Front_End.svg',
    paragraphData:
      'Start your career in software development with the intense program at Sourcery for Front-End Developers.',
    buttonProps: { to: routes.register },
  },
  TESTERS: {
    imagePath: '/assets/images/Image_Apply_Academy_Testers.svg',
    paragraphData:
      'Set your inner tester free and apply to empower yourself with the top-notch studies for the future Test Engineers!',
    buttonProps: { to: routes.register },
  },
};

export default data;
