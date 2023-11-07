import React from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
const EditMyFood = ({ openModal, setOpenModal, editFood, handelEditFood }) => {
    // console.log(editFood)
    const { _id, Food_Name, Food_Image, Food_Quantity, Pickup_Location, Expired_Date, Additional_Notes } = editFood;

    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Edit Food Details</Modal.Header>
            <Modal.Body>
                <form onSubmit={(e) => handelEditFood(e, _id)} className='border w-full p-2 sm:p-10 h-full bg-[#D8E7CF] bg-opacity-40 rounded-xl'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="text33" value="Food Name" />
                            </div>
                            <TextInput id="text33" name='Food_Name' defaultValue={Food_Name} type="text" />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="text44" value="Food Image" />
                            </div>
                            <TextInput id="text44" name='Food_Image' defaultValue={Food_Image} type="text" />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="num55" value="Food Quantity" />
                            </div>
                            <TextInput id="num55" name='Food_Quantity' defaultValue={Food_Quantity} type="number" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="text66" value="Pick Up Point" />
                            </div>
                            <TextInput id="text66" name='Pickup_Location' type="text" defaultValue={Pickup_Location} required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="text7" value="Expire Date" />
                            </div>
                            <TextInput id="text7" name='Expired_Date' type="date" defaultValue={Expired_Date} required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label className='font-bold text-xl' htmlFor="text88" value="Additional Notes" />
                            </div>
                            <Textarea id="text88" name='Additional_Notes' type="text" defaultValue={Additional_Notes} />
                        </div>


                    </div>


                    <div className='flex justify-center my-8'>
                        <Button className='w-64 sm:w-96 mb-12 uppercase font-bold text-xl' gradientDuoTone="purpleToBlue" type="submit" >Submit</Button>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>

                <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditMyFood;