/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import Plugin from '../Plugin';

export class Provider {
  constructor(
    protected plugin: Plugin,
    protected options,
  ) {}

  async send(receiver: string, data: { [key: string]: any }): Promise<any> {}
}
