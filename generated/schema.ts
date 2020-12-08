// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NextRebase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NextRebase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NextRebase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NextRebase", id.toString(), this);
  }

  static load(id: string): NextRebase | null {
    return store.get("NextRebase", id) as NextRebase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nextRebaseInSeconds(): BigInt | null {
    let value = this.get("nextRebaseInSeconds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nextRebaseInSeconds(value: BigInt | null) {
    if (value === null) {
      this.unset("nextRebaseInSeconds");
    } else {
      this.set("nextRebaseInSeconds", Value.fromBigInt(value as BigInt));
    }
  }

  get previousRebase(): BigDecimal | null {
    let value = this.get("previousRebase");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set previousRebase(value: BigDecimal | null) {
    if (value === null) {
      this.unset("previousRebase");
    } else {
      this.set("previousRebase", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get nextRebase(): BigDecimal | null {
    let value = this.get("nextRebase");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set nextRebase(value: BigDecimal | null) {
    if (value === null) {
      this.unset("nextRebase");
    } else {
      this.set("nextRebase", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}