// https://react.vlpt.us/using-typescript/03-ts-manage-state.html
import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string, description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
  
  const [form, setForm] = useState({ // 기본값으로 알아서 타입을 유추해준다.
    name: '',
    description: '',
  });

  const { name, description } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(state => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name"  onChange={onChange} />
      <input name="description" onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

MyForm.defaultProps = {
};

export default MyForm;