import { colorVariables } from './color-variables';
import { ColorSchemeName } from './colorSchemeName';
import { RateNowConfigName } from './config-name.model';
import { RateNowConfig } from './ratenow-config.interface';

const defaultConfig: RateNowConfig = {
  id: RateNowConfigName.basic,
  name: 'Rae',
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
  imgSrc: '//ratenow-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'RateNow',
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

export const configs: RateNowConfig[] = [defaultConfig];
