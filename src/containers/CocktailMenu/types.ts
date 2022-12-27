import { BasicDate, Gender, UUID, Identifiable, Name } from 'types/common-types';

export interface Parents {
  fatherId?: UUID;
  motherId?: UUID;
}

export interface Family {
  partnerId: UUID;
  marriedAt: BasicDate;
  children: UUID[];
}

export interface Person extends Identifiable {
  gender: Gender;
  name: Name;
  bornAt: BasicDate;
  diedAt: BasicDate;
  parents: Parents;
  family?: Family;
}

/* eslint-disable prettier/prettier */

interface Connection {
  knowledge: number; // [0 - 5] how closely they know each other (closeness, intimacy, knowledge)
  friendliness: number; // [-5 - 5] how much they like or hate the other
}

enum ConnectionLevel {
  Violent = -5, // violent acts or plans
  Discriminating = -4, // economic-, political-, educational discrimination, segregation
  Prejudice = -3, // bullying, de-humanization
  Dislike = -2, // personal reason; ridicule, name-calling/slurs, social avoidance
  Biased = -1, // stereotyping, no actual personal reason

  Stranger = 0, // not aware of existence

  Acquaintance = 1, // occasional contact with very general knowledge
  CasualFriend = 2, // common interest and activities, more meetings, not serious emotionally
  CloseFriend = 3, // share similar values, ideals; mutual interests/life goals; connected in mind, body, spirit; Most people never get this far
  IntimateFriend = 4, // commitment to the development of each other's characters; mutual responsibility of honesty; connected soul to soul
}

/*
  hate - disgust
  hate - anger
  hate - devaluation

  enemy?

  connection parts
  operational, spiritual


  közelség
  kedveltség


*/

type ConnectionDictionary = Record<UUID, Connection>;
