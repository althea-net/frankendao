import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Field, Info, SidePanel, Text, TextInput } from "@aragon/ui";

const SubscriptionFee = ({ handleClose, opened }) => {
  let [t] = useTranslation();

  let [fee, setFee] = useState("");
  const currentFee = 0.2;

  return (
    <SidePanel
      title={t("updateSubscriptionFee")}
      opened={opened}
      onClose={handleClose}
    >
      <Info.Action title={t("nodesPay")}>
        <Text>
          Updating the subscription fee impacts the amount that each node is
          required to pay for being part of your organization.
        </Text>
      </Info.Action>

      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <Text>
          The current subscription fee is &Xi; {currentFee} per month.
        </Text>
      </div>

      <Field label={t("newSubscriptionFee")}>
        <TextInput
          type="text"
          name="fee"
          onChange={e => setFee(e.target.value)}
          value={fee}
        />
        <Text style={{ color: "#ccc", fontSize: "12px", marginLeft: 10 }}>
          ETH
        </Text>
      </Field>

      <Button mode="strong" wide style={{ marginTop: 20 }}>
        {t("updateSubscriptionFee")}
      </Button>
    </SidePanel>
  );
};

SubscriptionFee.propTypes = {
  handleClose: PropTypes.func,
  opened: PropTypes.bool,
  t: PropTypes.func
};

export default SubscriptionFee;
