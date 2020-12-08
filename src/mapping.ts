import { LogRebase } from '../generated/xbtc/xbtc'
import {NextRebase } from '../generated/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';

export function handleLogRebase(event: LogRebase): void {
  let oNextRebase = new NextRebase("")
  oNextRebase.nextRebase = null    // Todo
  oNextRebase.save()


}


