import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: 'dtp2szr67',
      api_key: '644922981327282',
      api_secret: 'o0ggSBBUEoe8GoXxPHL1QAYGPRg',
    });
  },
};
