/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { genStyleHook } from '../../../schema-component/antd/__builtins__';

export const useSchemaInitializerStyles = genStyleHook('nb-schema-initializer', (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      '.ant-menu': {
        background: 'transparent',
        borderInlineEnd: 'none !important',
      },
      ':not(.ant-menu)': {
        [`${componentCls}-group-title`]: {
          color: token.colorTextDescription,
          // height: token.controlHeight,
          lineHeight: `${token.controlHeight}px`,
          paddingLeft: token.padding,
          paddingRight: token.paddingSM,
          // paddingTop: token.paddingXXS,
          // paddingBottom: token.paddingXXS,
        },
        [`${componentCls}-menu-item`]: {
          marginInline: token.marginXXS,
          // margin: token.marginXXS,
          paddingLeft: token.padding,
          paddingRight: token.paddingSM,
          // height: token.controlHeight,
          lineHeight: `${token.controlHeight}px`,
          color: token.colorText,
          cursor: 'pointer',

          '&:hover': {
            borderRadius: token.borderRadiusSM,
            backgroundColor: token.colorBgTextHover,
          },
        },
      },
    },
    [`${componentCls}-menu-sub`]: {
      ul: {
        maxHeight: '50vh !important',
      },
    },
    [`${componentCls}-item-content`]: {
      marginLeft: token.marginXS,
    },
  };
});
