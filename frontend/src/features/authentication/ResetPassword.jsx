import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { updatePassword } from "../../api/services/user-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  // server need reset token and new password

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(
      { newPassword },
      {
        onSettled: () => {
          setNewPassword("");
        }
      }
    );
  };

  return (
    <section className="flex items-center justify-center h-full">
      <Form className="px-4 py-8 text-center md:px-8" onSubmit={onSubmit}>
        <h3 className="mb-4 text-2xl italic font-semibold md:mb-8">Snapgram</h3>
        <div className="py-2 space-y-2">
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            name="newPassword"
            placeholder="New Password"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          varient="primary"
          className="!w-full"
        >
          {isPending ? "Reseting" : "Reset Password"}
        </Button>
      </Form>
    </section>
  );
};

export default ResetPassword;
