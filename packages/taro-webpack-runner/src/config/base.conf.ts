import * as path from 'path'
import * as Chain from 'webpack-chain'

import { getRootPath } from '../util'
import { BuildConfig } from '../util/types'

export default (appPath: string, config: Partial<BuildConfig>) => {
  const chain = new Chain()
  let alias = {}

  if (config.framework === 'nerv') {
    alias = {
      react$: path.resolve(appPath, 'node_modules', 'nervjs'),
      'react-dom$': path.resolve(appPath, 'node_modules', 'nervjs')
    }
  }

  chain.merge({
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue'],
      mainFields: ['main:h5', 'browser', 'module', 'main'],
      symlinks: true,
      modules: [path.join(appPath, 'node_modules'), 'node_modules'],
      alias
    },
    resolveLoader: {
      modules: [path.join(getRootPath(), 'node_modules'), 'node_modules']
    }
  })

  return chain
}
