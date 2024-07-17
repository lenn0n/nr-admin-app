import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface  ModalStateProps {
  modalId: string,
  isOpen: boolean
}

const initialState: ModalStateProps = { modalId: '', isOpen: false }

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalId = action.payload.id
    },
    closeModal(state) {
      state.isOpen = false
    },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer