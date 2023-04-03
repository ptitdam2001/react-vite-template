import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import App from "./App";
import { expect, it } from "vitest";

describe("App", () => {
	it("contains a button to increment counter", async () => {
		const { getByTestId, getByText } = render(<App />);

		const button = getByTestId("countBtn");

		expect(button).toBeInTheDocument();
    expect(await screen.findByText(/count is 0/i)).toBeInTheDocument();

    // click on button
    await userEvent.click(button)

    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();

	});
});
