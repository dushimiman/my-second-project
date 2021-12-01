import React from "react";
import { Form, Input, DatePicker, Space, InputNumber, Button } from "antd";

const NewTourView = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Space>
        <Form.Item
          name="dateScheduled"
          label="Date Schedule"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item name="seats" label="Seats" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="available"
          label="Available Seats"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Space>
      <Form.Item
        name="tripDescription"
        label="Trip Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Contact Phone Number"
        rules={[{ required: true }]}
      >
        {/* <Select value="86" style={{ width: 70 }}> +86 </Select> */}
        <Input />
      </Form.Item>

      <Button htmlType="submit" type="primary">
        {" "}
        Register Tour
      </Button>
    </Form>
  );
};
export default NewTourView;
