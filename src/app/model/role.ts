import { StringLiteralLike } from "typescript";
import { SourceOwner } from "./source-owner";

export class Role {
    name: string;
    id: string;
    description: string;
    enabled: boolean;
    requestable: boolean;
    owner: SourceOwner;
    criteria: boolean;
    newOwner: SourceOwner;
    selected: boolean;
    cloudExternalID: string;
    accessProfiles: string[];
    currentOwnerAccountName: string;
    currentOwnerDisplayName: string;
}
