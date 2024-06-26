// Записи води на сьогодні
export const selectNotes = state => state.water.notes;

// Конкретний запис води по ID
export const selectCurrentNote = state => state.water.currentNote;

// Записи води за місяць
export const selectMonthNote = state => state.water.monthNotes;

// Модалка
export const selectIsModalOpen = state => state.water.isModalOpen;

// isLoading
export const selectIsLoading = state => state.water.isLoading;
