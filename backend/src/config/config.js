// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};

  // theme
  config.theme = {
    base: {
      title: 'Cabloy',
      subTitle: 'The Ultimate Javascript Full Stack Business Development Platform, based on EggJS & VueJS',
    },
    plugins: {
      'cms-plugintrack': {
        track: {
          qq: '',
          baidu: '5160a9da9a0ea79a5fb0782fcec92059',
          google: '',
        },
      },
    },
    _theme: {
      name: 'cabloy-cmsthemecommunity',
      url: 'https://github.com/zhennann/egg-born-module-cabloy-cmsthemecommunity',
    },
    _github: {
      user: 'zhennann',
      repo: 'cabloy',
    },
    _project: {
      name: 'CabloyJS',
      version: '1.4.19',
      description: 'The Ultimate Javascript Full Stack Business Development Platform, based on EggJS & VueJS',
      logo: 'assets/images/logo.png',
      logoMask: 'assets/images/logo-mask.png',
      buttons: [
        { title: 'Github', color: 'primary', url: 'https://github.com/zhennann/cabloy' },
        { title: 'Documentation', color: 'primary', url: 'articles/introduce.html' },
        { title: 'Demo Online', url: 'https://admin.cabloy.com' },
      ],
      features: [
        { title: 'PC = MOBILE + PAD', description: '\'Mobile First\' strategy, and perfectly adapting PC layout' },
        { title: 'Business Modularization', description: 'The business components and logics are arranged as modules, so as for cohesion and reuse' },
        { title: 'Frontend and Backend Separation', description: 'Separating Frontend and Backend, so as for decoupling' },
        { title: 'Core Business Modules', description: 'Providing many core business modules for rapid business development, such as Users, Roles, Rights, Menus, etc' },
      ],
      columns: 4,
    },
  };

  return config;
};
