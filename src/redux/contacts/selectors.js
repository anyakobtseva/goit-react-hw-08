import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from '../filters/selectors';

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter === "") return contacts;
    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name
          .toLowerCase()
          .split(" ")
          .some((c) => c.startsWith(filter.trim().toLowerCase())) ||
          contact.number && contact.number.includes(filter.trim())
    );
  }
);