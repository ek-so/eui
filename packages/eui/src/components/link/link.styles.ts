/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../services';
import { euiFocusRing, logicalTextAlignCSS } from '../../global_styling';

export const euiLinkCSS = (euiThemeContext: UseEuiTheme) => {
  const { euiTheme } = euiThemeContext;
  return `
    font-weight: ${euiTheme.font.weight.medium};
    ${logicalTextAlignCSS('left')}

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      ${euiFocusRing(euiThemeContext, 'outset')}
      text-decoration: underline;
      text-decoration-thickness: ${euiTheme.border.width.thick};
    }
  `;
};

export const euiLinkStyles = (euiThemeContext: UseEuiTheme) => {
  const { euiTheme } = euiThemeContext;
  return {
    euiLink: css`
      ${euiLinkCSS(euiThemeContext)}
      user-select: text;

      &[target='_blank'] {
        position: relative;
      }
    `,
    disabled: css`
      font-weight: inherit;

      &:hover {
        cursor: auto;
      }

      &:hover,
      &:focus,
      &:target {
        text-decoration: none;
      }
    `,
    // Color styles
    primary: css(_colorCSS(euiTheme.colors.textPrimary)),
    subdued: css(_colorCSS(euiTheme.colors.textSubdued)),
    success: css(_colorCSS(euiTheme.colors.textSuccess)),
    accent: css(_colorCSS(euiTheme.colors.textAccent)),
    danger: css(_colorCSS(euiTheme.colors.textDanger)),
    warning: css(_colorCSS(euiTheme.colors.textWarning)),
    ghost: css(_colorCSS(euiTheme.colors.ghost)),
    text: css(_colorCSS(euiTheme.colors.textParagraph)),
  };
};

const _colorCSS = (color: string) => {
  return `
    color: ${color};

    &:target {
      color: darken(${color}, 10%);
    }
  `;
};
