interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };

  template: 'handlebars';
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'equipe@gobarber.com.br',
      name: 'Equipe GoBarber',
    },
  },

  template: 'handlebars',
} as IMailConfig;
