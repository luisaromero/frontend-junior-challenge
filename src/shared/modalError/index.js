import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 170,
    width: 600,
    padding: "20%",
    bgcolor: 'background.paper',
    p: 4,
    textAlign: "center"
};

export const ModalError = ({ open, handleClose, children }) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Error
                </Typography>
                <Typography id="modal-modal-description" sx={{ m: 2 }}>
                    Hubo un problema .
                </Typography>
                <Typography id="modal-modal-description" sx={{ m: 2 }}>
                    No se pudo completar la acción.
                </Typography>
                <Button variant="outlined" size="large" onClick={handleClose}>Cancelar</Button>
            </Box>
        </Modal>
    )
}

export default { ModalError }