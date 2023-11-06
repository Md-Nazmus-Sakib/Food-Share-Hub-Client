
import { Button, Modal, Textarea } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';
import useAuth from '../../Hook/useAuth';
import moment from 'moment/moment';
const OpenModal = ({ openModal, setOpenModal, food }) => {
    const { user } = useAuth();

    const { _id, Food_Image, Donator_Image, Donator_Name, Donator_Email, Expired_Date, Expired_Time, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes } = food;
    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const money = form.money.value;
        const addNote = form.addNote.value;
        const currentDate = form.currentDate.value;
        const bookedFood = { food_id: _id, Food_Image, Donator_Image, Donator_Name, Donator_Email, Expired_Date, currentDate, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes, money, addNote }
        console.log(bookedFood)
    }
    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>{Food_Name}</Modal.Header>

            <Modal.Body>
                <form onSubmit={handelSubmit}>
                    <div className="space-y-6">
                        <div className='flex justify-center'>
                            <img className='w-24' src={Food_Image} alt="" />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text3" value="Food Id" />
                                </div>
                                <TextInput id="text3" defaultValue={_id} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text4" value="Donator Name" />
                                </div>
                                <TextInput id="text4" defaultValue={Donator_Name} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text5" value="Donator Email" />
                                </div>
                                <TextInput id="text5" defaultValue={Donator_Email || 'Not Show'} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text6" value="User Email" />
                                </div>
                                <TextInput id="text6" defaultValue={user?.email} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text7" value="Expire Date" />
                                </div>
                                <TextInput id="text7" defaultValue={moment(Expired_Date).format('DD-MM-YYYY')} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text8" value="Current Date" />
                                </div>
                                <TextInput id="text8" name='currentDate' defaultValue={moment(new Date()).format('DD-MM-YYYY, hh:mm')} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text9" value="Pickup Point" />
                                </div>
                                <TextInput id="text9" defaultValue={Pickup_Location} type="text" disabled />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="num9" value="Donating Money" />
                                </div>
                                <TextInput id="num9" name='money' type="number" placeholder='0' required />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="text10" value="Additional Note" />
                                </div>
                                <Textarea id="text10" name='addNote' type="text" placeholder='Write Something' required />
                            </div>
                        </div>

                    </div>

                    <Modal.Footer>
                        {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                        <Button type="submit" >I accept</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default OpenModal;