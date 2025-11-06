interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface TeamMemberProps {
  member: Member;
}

export const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm w-full max-w-md">
      <img
        src={member.imageUrl}
        alt={`Foto de ${member.name}`}
        className="w-36 h-36 rounded-full object-cover border-4 border-[#03022F] mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-[#D4AF37] font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );
};
