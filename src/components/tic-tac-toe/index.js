/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Client } from 'boardgame.io/react';
import TicTacToeController from './Game';
import Board from './Board';

const TicTacToe = Client({
  numPlayers: 2,
  game: TicTacToeController,
  board: Board,
  debug: false
});

export default TicTacToe;
