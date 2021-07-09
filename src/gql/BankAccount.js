import { gql } from "@apollo/client";

export const GET_MY_BANK_ACCOUNT = gql`
  query getMyBankAccount {
    getMyBankAccount {
      ok
      error
      isExist
      bankAccount {
        id
        number
        name
        bank
      }
    }
  }
`;

export const UPSERT_MY_BANK_ACCOUNT = gql`
  mutation upsertMyBankAccount($bank: String, $number: String, $name: String) {
    upsertMyBankAccount(bank: $bank, number: $number, name: $name) {
      ok
      error
    }
  }
`;

export const GET_INCOME = gql`
  query getIncome {
    getIncome {
      idNumber
      price
      income
      createdAt
      state
    }
  }
`;
