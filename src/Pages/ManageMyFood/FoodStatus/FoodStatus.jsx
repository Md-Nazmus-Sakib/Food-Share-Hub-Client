import React from 'react';
import { Avatar, Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { Table } from 'flowbite-react';
const FoodStatus = ({ foodStatusModal, setFoodStatusModal, bookedItems, handelApproveStatus }) => {
    console.log(bookedItems)
    return (

        <div>
            <Modal dismissible show={foodStatusModal} onClose={() => setFoodStatusModal(false)}>
                <Modal.Header>Food Status</Modal.Header>
                <Modal.Body>

                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Requester Name</Table.HeadCell>
                            <Table.HeadCell>Requester Image</Table.HeadCell>
                            <Table.HeadCell>Requester Email</Table.HeadCell>
                            <Table.HeadCell>Request Time</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                bookedItems.map(item => <Table.Row key={item?._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {item?.Requester_Name}
                                    </Table.Cell>
                                    <Table.Cell><Avatar img={item?.Requester_Img} alt="avatar of Jese" rounded /> </Table.Cell>
                                    <Table.Cell>{item?.Requester_Email}</Table.Cell>
                                    <Table.Cell>{item?.currentDate}</Table.Cell>
                                    <Table.Cell>{item?.Food_Status}</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => handelApproveStatus(item?.food_id)}>Approve</Button>
                                    </Table.Cell>
                                </Table.Row>)
                            }


                        </Table.Body>
                    </Table>

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