import Step1_Developers from '/src/assets/images/Image_Steps_Developers_1.svg';
import Step2_Developers from '/src/assets/images/Image_Steps_Developers_2.svg';
import Step3_Developers from '/src/assets/images/Image_Steps_Developers_3.svg';
import Step4_Developers from '/src/assets/images/Image_Steps_Developers_4.svg';
import Step1_Testers from '/src/assets/images/Image_Steps_Testers_1.svg';
import Step2_Testers from '/src/assets/images/Image_Steps_Testers_2.svg';
import Step3_Testers from '/src/assets/images/Image_Steps_Testers_3.svg';
import Step4_Testers from '/src/assets/images/Image_Steps_Testers_4.svg';
import Step1_Front_End from '/src/assets/images/Image_Steps_Front_End_1.svg';
import Step2_Front_End from '/src/assets/images/Image_Steps_Front_End_2.svg';
import Step3_Front_End from '/src/assets/images/Image_Steps_Front_End_3.svg';
import Step4_Front_End from '/src/assets/images/Image_Steps_Front_End_4.svg';

const stepsData = {
  1: {
    title: 'Apply',
    image: {
      DEVELOPERS: Step1_Developers,
      TESTERS: Step1_Testers,
      FRONTEND: Step1_Front_End,
    },
  },
  2: {
    title: 'Pass the admission',
    image: {
      DEVELOPERS: Step2_Developers,
      TESTERS: Step2_Testers,
      FRONTEND: Step2_Front_End,
    },
  },
  3: {
    title: 'Learn from the experts',
    image: {
      DEVELOPERS: Step3_Developers,
      TESTERS: Step3_Testers,
      FRONTEND: Step3_Front_End,
    },
  },
  4: {
    title: 'Join the company',
    image: {
      DEVELOPERS: Step4_Developers,
      TESTERS: Step4_Testers,
      FRONTEND: Step4_Front_End,
    },
  },
};

export default stepsData;
