import React from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
const FoodStatus = ({ foodStatusModal, setFoodStatusModal }) => {
    return (
        <div>
            <Modal dismissible show={foodStatusModal} onClose={() => setFoodStatusModal(false)}>
                <Modal.Header>Food Status</Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim eaque laborum, quaerat mollitia eius nulla consequatur doloremque ex cum. Dolorem facere expedita perspiciatis dolores laborum exercitationem fuga illo non?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button color="gray" onClick={() => setFoodStatusModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FoodStatus;