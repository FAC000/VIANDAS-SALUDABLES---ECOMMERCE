import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export const Modal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="modalContainer"
            >
                <Link to={'/'}>
                    <button className="modalCloseBtn">
                        <X size={22} />
                    </button>
                </Link>

                <h2 className="modalTitle">
                    ¡Gracias por tu compra!
                </h2>

                <p className="modalText">
                    Tu pedido fue procesado exitosamente. Pronto recibirás la confirmación
                    por correo electrónico.
                </p>
                <Link to={'/'}>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="modalButton"
                    >
                        Cerrar
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};
