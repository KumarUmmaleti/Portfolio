import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding: 5rem 1rem;
  background: #a09c9c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  width: 100%;
  background: white;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

/* Left Side - Form */
export const LeftSide = styled.div`
  flex: 1;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 12px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  height: 40px;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  
  &:focus {
    border-color: #6a11cb;
    outline: none;
    box-shadow: 0 0 10px rgba(106, 17, 203, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  height: 75px;
  transition: 0.3s ease-in-out;
  
  &:focus {
    border-color: #6a11cb;
    outline: none;
    box-shadow: 0 0 10px rgba(106, 17, 203, 0.2);
  }
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(37, 117, 252, 0.3);
  }
`;

/* Right Side - Contact Info */
export const RightSide = styled.div`
  flex: 1;
  padding: 1rem;
  background:  #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  color: #6a11cb;
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #2575fc;
    transform: scale(1.1);
  }
`;
