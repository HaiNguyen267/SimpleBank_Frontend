import { useContext } from "react";
import { ModalContext } from "../components/ModalContext";

export default function (e, setOpenModal) {
    if (e.key === "Enter") {
        setOpenModal(false)
    }
}