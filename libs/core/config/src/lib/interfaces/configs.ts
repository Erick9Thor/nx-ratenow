import { colorVariables } from './color-variables';
import { ColorSchemeName } from './colorSchemeName';
import { RateNowConfigName } from './config-name.model';
import { RateNowConfig } from './ratenow-config.interface';
import { mergeDeep } from '@nx-ratenow/core/utils';

const defaultConfig: RateNowConfig = {
  id: RateNowConfigName.apollo,
  name: 'Apollo',
  style: {
    colorScheme: ColorSchemeName.default,
    colors: {
      primary: colorVariables.blue
    },
    borderRadius: {
      value: 0.25,
      unit: 'rem'
    },
    button: {
      borderRadius: undefined
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'VEX',
    imageUrl: 'assets/img/demo/logo.svg',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};

export const configs: RateNowConfig[] = [
  defaultConfig,
  mergeDeep(
    { ...defaultConfig },
    {
      id: RateNowConfigName.poseidon,
      name: 'Poseidon',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/poseidon.png',
      style: {
        borderRadius: {
          value: 0.5,
          unit: 'rem'
        },
        button: {
          borderRadius: {
            value: 9999,
            unit: 'px'
          }
        }
      },
      sidenav: {
        user: {
          visible: true
        },
        search: {
          visible: true
        }
      },
      toolbar: {
        user: {
          visible: false
        }
      },
      footer: {
        fixed: false
      }
    }
  ),
  mergeDeep(
    { ...defaultConfig },
    {
      id: RateNowConfigName.hermes,
      name: 'Hermes',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
      layout: 'vertical',
      boxed: true,
      sidenav: {
        user: {
          visible: false
        },
        search: {
          visible: false
        }
      },
      toolbar: {
        fixed: false
      },
      footer: {
        fixed: false
      }
    }
  ),
  mergeDeep(
    { ...defaultConfig },
    {
      id: RateNowConfigName.ares,
      name: 'Ares',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
      sidenav: {
        user: {
          visible: false
        },
        search: {
          visible: false
        }
      },
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        fixed: false
      }
    }
  ),
  mergeDeep(
    { ...defaultConfig },
    {
      id: RateNowConfigName.zeus,
      name: 'Zeus',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
      sidenav: {
        state: 'collapsed'
      }
    }
  ),
  mergeDeep(
    { ...defaultConfig },
    {
      id: RateNowConfigName.ikaros,
      name: 'Ikaros',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
      layout: 'vertical',
      boxed: true,
      sidenav: {
        user: {
          visible: false
        },
        search: {
          visible: false
        }
      },
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        fixed: false
      }
    }
  )
];
