// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { Story } from "@storybook/react";

import { AppBar } from "@foxglove/studio-base/components/AppBar";
import MockMessagePipelineProvider from "@foxglove/studio-base/components/MessagePipeline/MockMessagePipelineProvider";
import { User } from "@foxglove/studio-base/context/CurrentUserContext";

export default {
  title: "components/AppBar",
  component: AppBar,
  decorators: [Wrapper],
  parameters: {
    colorScheme: "both-column",
  },
};

function Wrapper(StoryFn: Story): JSX.Element {
  return (
    <MockMessagePipelineProvider>
      <StoryFn />
    </MockMessagePipelineProvider>
  );
}

export function Default(): JSX.Element {
  return <AppBar />;
}

export function CustomWindowControls(): JSX.Element {
  return <AppBar showCustomWindowControls />;
}

export function CustomWindowControlsDragRegion(): JSX.Element {
  return <AppBar showCustomWindowControls debugDragRegion />;
}

export function SignInDisabled(): JSX.Element {
  return <AppBar />;
}

export function UserPresent(): JSX.Element {
  const org: User["org"] = {
    id: "fake-orgid",
    slug: "fake-org",
    displayName: "Fake Org",
    isEnterprise: false,
    allowsUploads: false,
    supportsEdgeSites: false,
  };

  const me = {
    id: "fake-userid",
    orgId: org.id,
    orgDisplayName: org.displayName,
    orgSlug: org.slug,
    orgPaid: false,
    email: "foo@example.com",
    org,
  };

  return (
    <AppBar
      currentUser={me}
      signIn={() => {
        // noop
      }}
    />
  );
}
