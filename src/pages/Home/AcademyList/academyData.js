import { routes } from '/src/routes/';
import Img_Developers from '/src/assets/images/Image_Academy_Developers.svg';
import Img_Testers from '/src/assets/images/Image_Academy_Testers.svg';
import Img_FrontEnd from '/src/assets/images/Image_Academy_Front_End.svg';
import Img_Kids from '/src/assets/images/Image_Academy_Kids.svg';
import Path_Developers from '/src/assets/images/Path_Academy_Developers.svg';
import Path_Testers from '/src/assets/images/Path_Academy_Testers.svg';
import Path_Kids from '/src/assets/images/Path_Academy_Kids.svg';

import Particles_AcadList_Dev_1 from '/src/assets/images/Particles_AcadList_Dev-1.svg';
import Particles_AcadList_Dev_2 from '/src/assets/images/Particles_AcadList_Dev-2.svg';
import Particles_AcadList_Test_1 from '/src/assets/images/Particles_AcadList_Test-1.svg';
import Particles_AcadList_Test_2 from '/src/assets/images/Particles_AcadList_Test-2.svg';
import Particles_AcadList_Front_1 from '/src/assets/images/Particles_AcadList_Front-1.svg';
import Particles_AcadList_Front_2 from '/src/assets/images/Particles_AcadList_Front-2.svg';
import Particles_AcadList_Kids_1 from '/src/assets/images/Particles_AcadList_Kids-1.svg';
import Particles_AcadList_Kids_2 from '/src/assets/images/Particles_AcadList_Kids-2.svg';
import Particles_AcadList_Kids_3 from '/src/assets/images/Particles_AcadList_Kids-3.svg';

const academyData = [
  {
    type: 'developers',
    title: 'Sourcery for Developers',
    paragraph:
      'A free of charge three-month cutting-edge technology course, available in the Spring and Fall of each year. Students are invited to the Devbridge in Kaunas and Vilnius offices to attend lectures and create custom projects with the help of software development professionals.',
    buttonProps: { to: routes.developers },
    img: Img_Developers,
    svgPath: Path_Developers,
    isInverted: false,
    particleSvgs: [Particles_AcadList_Dev_1, Particles_AcadList_Dev_2],
  },
  {
    type: 'testers',
    title: 'Sourcery for Testers',
    paragraph:
      'Top-notch studies for the future Test Engineers. Students join the Devbridge team as a paid employee for the Academy period (two months) to learn and work. Ones who finish the Academy successfully are invited to continue employment on full time.',
    buttonProps: { to: routes.testers },
    img: Img_Testers,
    svgPath: Path_Testers,
    isInverted: true,
    particleSvgs: [Particles_AcadList_Test_1, Particles_AcadList_Test_2],
  },
  {
    type: 'front-end',
    title: 'Sourcery for Front-End',
    paragraph:
      'Start your career in software development with the intense program at Sourcery for Front-End Developers. Complete the admission and enter our free of charge two-month academy this autumn in Vilnius to learn from our top specialists.',
    buttonProps: { to: routes.frontEnd },
    img: Img_FrontEnd,
    svgPath: null,
    isInverted: true,
    particleSvgs: [Particles_AcadList_Front_1, Particles_AcadList_Front_2],
  },
  {
    type: 'kids',
    title: 'Sourcery for Kids',
    paragraph:
      'Sourcery for Kids seeks to educate kids giving them opportunity to learn and apply technological product development skills. For the entire academic year, the children will study key aspects of programming, from logical concepts and functions, through to variables, sequences, coordinates, and movement.',
    buttonProps: { to: routes.kids },
    img: Img_Kids,
    svgPath: Path_Kids,
    isInverted: false,
    particleSvgs: [
      Particles_AcadList_Kids_1,
      Particles_AcadList_Kids_2,
      Particles_AcadList_Kids_3,
    ],
  },
];

export default academyData;
