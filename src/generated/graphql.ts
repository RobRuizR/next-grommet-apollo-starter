export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appointment = {
  __typename?: 'Appointment';
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  appointedTo: Patient;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: AuthPayload;
  login: AuthPayload;
  createPatient: Patient;
  deletePatient?: Maybe<Patient>;
  createAppointment: Appointment;
};

export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreatePatientArgs = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  motivation?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  recommendedBy?: Maybe<Scalars['ID']>;
};

export type MutationDeletePatientArgs = {
  id: Scalars['ID'];
};

export type MutationCreateAppointmentArgs = {
  patientId: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  date: Scalars['String'];
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID'];
  name: Scalars['String'];
  motivation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  recommended: Array<Patient>;
  recommendedBy?: Maybe<Patient>;
};

export type PatientRecommendedArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  patient?: Maybe<Patient>;
  patients: Array<Patient>;
};

export type QueryPatientArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryPatientsArgs = {
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
};

import gql from 'graphql-tag';
