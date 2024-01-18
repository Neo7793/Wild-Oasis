import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddBookings() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="guests-form">
          <Button>Add new booking</Button>
        </Modal.Open>
        <Modal.Window name="guests-form">
          <CreateGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBookings;
